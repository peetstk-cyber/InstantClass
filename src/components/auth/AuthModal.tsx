import { useState } from "react";
import type { Language } from "../../App";
import type { UserProfile } from "../../types/auth";
import { X, User, Mail, Lock, CheckCircle2, LogIn, UserPlus, LogOut, ShieldCheck, AtSign } from "lucide-react";
import { 
  auth, 
  loginWithGooglePopup, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  syncUserProfile,
  db
} from "../../lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

interface AuthModalProps {
  darkMode: boolean;
  language: Language;
  currentUser: UserProfile | null;
  onLogin: (user: UserProfile) => void;
  onLogout: () => void;
  onClose: () => void;
}

export function AuthModal({
  darkMode,
  language,
  currentUser,
  onLogin,
  onLogout,
  onClose,
}: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup" | "edit">(currentUser ? "edit" : "signin");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  // Sign in state (accepts Email or Username)
  const [loginInput, setLoginInput] = useState("");
  const [password, setPassword] = useState("");

  // Sign up & Edit state
  const [username, setUsername] = useState(currentUser?.username || "");
  const [signupEmail, setSignupEmail] = useState(currentUser?.email || "");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Colors
  const bg = darkMode ? "#111827" : "#FFFFFF";
  const cardBg = darkMode ? "#1E293B" : "#F8FAFC";
  const border = darkMode ? "#334155" : "#E2E8F0";
  const text = darkMode ? "#F1F5F9" : "#0F172A";
  const muted = darkMode ? "#94A3B8" : "#64748B";

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg(null);

    const input = loginInput.trim();
    let targetEmail = input;

    // Check if input is a username (doesn't contain '@')
    if (!input.includes("@")) {
      try {
        const q = query(collection(db, "users"), where("username", "==", input.toLowerCase()));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data() as UserProfile;
          targetEmail = userData.email;
        } else {
          setErrorMsg(language === "en" ? "Username not found in system." : "ไม่พบชื่อผู้ใช้นี้ในระบบ");
          setIsLoading(false);
          return;
        }
      } catch (err) {
        console.warn("Username query fallback:", err);
      }
    }

    try {
      const credential = await signInWithEmailAndPassword(auth, targetEmail, password);
      const profile = await syncUserProfile(credential.user);
      onLogin(profile);
      setIsLoading(false);
      onClose();
    } catch (err: any) {
      console.warn("Firebase Auth error:", err);
      let message = language === "en" ? "Invalid email/username or password." : "อีเมล/ชื่อผู้ใช้ หรือรหัสผ่านไม่ถูกต้อง";
      if (err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        message = language === "en" ? "Wrong password. Please try again." : "รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่อีกครั้ง";
      } else if (err.code === "auth/user-not-found") {
        message = language === "en" ? "User account not found." : "ไม่พบบัญชีผู้ใช้นี้ในระบบ";
      } else if (err.code === "auth/invalid-email") {
        message = language === "en" ? "Invalid email format." : "รูปแบบอีเมลไม่ถูกต้อง";
      }
      setErrorMsg(message);
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    try {
      const credential = await loginWithGooglePopup();
      const profile = await syncUserProfile(credential.user, { username });
      onLogin(profile);
      setIsLoading(false);
      onClose();
    } catch (err: any) {
      console.error("Google Auth Error:", err);
      if (err.code !== "auth/popup-closed-by-user") {
        const detail = err.code ? `[${err.code}] ${err.message}` : String(err);
        setErrorMsg(`Google Auth Error: ${detail}`);
      }
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!username.trim()) {
      setErrorMsg(language === "en" ? "Please enter a username" : "กรุณากรอกชื่อผู้ใช้ (Username)");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg(language === "en" ? "Passwords do not match!" : "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน!");
      return;
    }

    setIsLoading(true);
    const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_]/g, "");

    try {
      // Check if username is already taken in Firestore
      try {
        const q = query(collection(db, "users"), where("username", "==", cleanUsername));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          setErrorMsg(language === "en" ? "Username is already taken." : "ชื่อผู้ใช้นี้ถูกใช้งานแล้ว กรุณาเลือกชื่ออื่น");
          setIsLoading(false);
          return;
        }
      } catch (e) {
        console.warn("Check username error:", e);
      }

      const credential = await createUserWithEmailAndPassword(auth, signupEmail, password);
      const profile = await syncUserProfile(credential.user, { name: cleanUsername, username: cleanUsername });
      onLogin(profile);
      setIsLoading(false);
      onClose();
    } catch (err: any) {
      console.warn("Firebase SignUp error:", err);
      let message = err.message;
      if (err.code === "auth/email-already-in-use") {
        message = language === "en" ? "Email is already registered." : "อีเมลนี้ถูกลงทะเบียนไว้แล้ว";
      } else if (err.code === "auth/weak-password") {
        message = language === "en" ? "Password should be at least 6 characters." : "รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษร";
      } else if (err.code === "auth/invalid-email") {
        message = language === "en" ? "Invalid email format." : "รูปแบบอีเมลไม่ถูกต้อง";
      }
      setErrorMsg(message);
      setIsLoading(false);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentUser) {
      const updatedUser: UserProfile = {
        ...currentUser,
        username: username.trim().toLowerCase().replace(/[^a-z0-9_]/g, ""),
        email: signupEmail,
      };
      onLogin(updatedUser);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div
        style={{ background: bg, borderColor: border, color: text, width: 440 }}
        className="rounded-2xl border flex flex-col shadow-2xl overflow-hidden relative"
      >
        {/* Header */}
        <div style={{ borderColor: border }} className="px-6 py-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-[#00CED1]/15 border border-[#00CED1]/30 flex items-center justify-center text-[#00CED1]">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h3 className="font-extrabold text-sm tracking-tight text-slate-800 dark:text-slate-100">
                {currentUser 
                  ? (language === "en" ? "Manage Profile & Account" : "จัดการข้อมูลส่วนตัว & บัญชี")
                  : (mode === "signin" 
                      ? (language === "en" ? "Sign In to InstantClass" : "เข้าสู่ระบบ InstantClass")
                      : (language === "en" ? "Create Account" : "ลงทะเบียนบัญชีใหม่"))}
              </h3>
              <p className="text-[11px]" style={{ color: muted }}>
                {language === "en" ? "Sync clinical notes & bookmarks" : "ซิงค์โน้ต clinical และรายการโปรด"}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Switcher */}
        {!currentUser && (
          <div style={{ background: cardBg, borderColor: border }} className="flex border-b p-1">
            <button
              onClick={() => { setMode("signin"); setErrorMsg(null); }}
              className={`flex-1 py-2 text-center text-xs font-extrabold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === "signin"
                  ? "bg-[#00CED1] text-slate-950 shadow-xs"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <LogIn size={13} />
              <span>{language === "en" ? "Sign In" : "เข้าสู่ระบบ"}</span>
            </button>
            <button
              onClick={() => { setMode("signup"); setErrorMsg(null); }}
              className={`flex-1 py-2 text-center text-xs font-extrabold rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                mode === "signup"
                  ? "bg-[#00CED1] text-slate-950 shadow-xs"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <UserPlus size={13} />
              <span>{language === "en" ? "Register" : "ลงทะเบียน"}</span>
            </button>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6">
          {mode === "signin" && !currentUser && (
            <div className="flex flex-col gap-4">
              {/* Form 1: Email or Username Sign In */}
              <form onSubmit={handleSignIn} className="flex flex-col gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold" style={{ color: muted }}>
                    {language === "en" ? "Email or Username" : "อีเมล หรือ ชื่อผู้ใช้ (Username)"}
                  </label>
                  <div className="relative flex items-center">
                    <User size={15} className="absolute left-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="doctor@hospital.com or username"
                      value={loginInput}
                      onChange={e => setLoginInput(e.target.value)}
                      style={{ background: cardBg, borderColor: border, color: text }}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs outline-none focus:border-[#00CED1] transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold" style={{ color: muted }}>
                    {language === "en" ? "Password" : "รหัสผ่าน"}
                  </label>
                  <div className="relative flex items-center">
                    <Lock size={15} className="absolute left-3 text-slate-400" />
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      style={{ background: cardBg, borderColor: border, color: text }}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-xs outline-none focus:border-[#00CED1] transition-colors"
                    />
                  </div>
                </div>

                {errorMsg && (
                  <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[11px] font-bold text-center">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-2.5 rounded-xl bg-[#00CED1] hover:bg-[#00CED1]/90 text-slate-950 font-extrabold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-2 mt-1 disabled:opacity-50"
                >
                  <LogIn size={15} />
                  <span>{isLoading ? (language === "en" ? "Signing In..." : "กำลังเข้าสู่ระบบ...") : (language === "en" ? "Sign In" : "เข้าสู่ระบบ")}</span>
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-1 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t" style={{ borderColor: border }} />
                </div>
                <span className="relative px-3 text-[10px] uppercase tracking-widest font-extrabold" style={{ background: bg, color: muted }}>
                  {language === "en" ? "OR CONTINUE WITH" : "หรือเข้าสู่ระบบด้วย"}
                </span>
              </div>

              {/* Form 2: Google Sign-In (Positioned BELOW Email form) */}
              <button
                type="button"
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                style={{ background: darkMode ? "#1F2937" : "#FFFFFF", borderColor: darkMode ? "#374151" : "#E5E7EB" }}
                className="w-full py-3 px-4 rounded-xl border font-bold text-xs transition-all hover:border-[#00CED1] hover:shadow-md cursor-pointer flex items-center justify-center gap-3 active:scale-98"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span className="text-slate-800 dark:text-slate-100 font-extrabold text-[13px]">
                  {language === "en" ? "Sign In with Google" : "เข้าสู่ระบบด้วย Google"}
                </span>
              </button>
            </div>
          )}

          {(mode === "signup" || mode === "edit") && (
            <form onSubmit={mode === "edit" ? handleSaveProfile : handleSignUp} className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold" style={{ color: muted }}>
                  {language === "en" ? "Username" : "ชื่อผู้ใช้ (Username)"}
                </label>
                <div className="relative flex items-center">
                  <AtSign size={15} className="absolute left-3 text-slate-400" />
                  <input
                    type="text"
                    required
                    placeholder="somchai_ortho"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    style={{ background: cardBg, borderColor: border, color: text }}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border text-xs outline-none focus:border-[#00CED1] transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold" style={{ color: muted }}>
                  {language === "en" ? "Email Address" : "อีเมล"}
                </label>
                <div className="relative flex items-center">
                  <Mail size={15} className="absolute left-3 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="somchai@hospital.com"
                    value={signupEmail}
                    onChange={e => setSignupEmail(e.target.value)}
                    style={{ background: cardBg, borderColor: border, color: text }}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border text-xs outline-none focus:border-[#00CED1] transition-colors"
                  />
                </div>
              </div>

              {mode === "signup" && (
                <>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold" style={{ color: muted }}>
                      {language === "en" ? "Password" : "กำหนดรหัสผ่าน"}
                    </label>
                    <div className="relative flex items-center">
                      <Lock size={15} className="absolute left-3 text-slate-400" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{ background: cardBg, borderColor: border, color: text }}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border text-xs outline-none focus:border-[#00CED1] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold" style={{ color: muted }}>
                      {language === "en" ? "Confirm Password" : "ยืนยันรหัสผ่าน"}
                    </label>
                    <div className="relative flex items-center">
                      <Lock size={15} className="absolute left-3 text-slate-400" />
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        style={{ background: cardBg, borderColor: border, color: text }}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border text-xs outline-none focus:border-[#00CED1] transition-colors"
                      />
                    </div>
                  </div>
                </>
              )}

              {errorMsg && (
                <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-[11px] font-bold text-center">
                  {errorMsg}
                </div>
              )}

              <div className="flex items-center gap-2 mt-3">
                {currentUser && (
                  <button
                    type="button"
                    onClick={() => {
                      onLogout();
                      onClose();
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/40 text-rose-400 font-extrabold text-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <LogOut size={14} />
                    <span>{language === "en" ? "Log Out" : "ออกจากระบบ"}</span>
                  </button>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-2.5 rounded-xl bg-[#00CED1] hover:bg-[#00CED1]/90 text-slate-950 font-extrabold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                >
                  <CheckCircle2 size={15} />
                  <span>
                    {mode === "edit"
                      ? (language === "en" ? "Save Changes" : "บันทึกข้อมูล")
                      : (language === "en" ? "Create Account" : "สร้างบัญชีผู้ใช้")}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
