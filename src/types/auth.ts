export interface UserProfile {
  id: string;
  username: string;
  name: string;
  email: string;
  avatarUrl?: string;
  streakDays: number;
  quizzesAnswered: number;
  quizzesCorrect: number;
  bookmarks: string[]; // List of classification system IDs/names
  notes: Record<string, string>; // systemId -> custom clinical note
}

export const DEFAULT_GUEST_USER: UserProfile = {
  id: "guest-1",
  username: "guest_resident",
  name: "Dr. Guest Resident",
  email: "resident@orthobros.com",
  streakDays: 3,
  quizzesAnswered: 20,
  quizzesCorrect: 16,
  bookmarks: [],
  notes: {},
};
