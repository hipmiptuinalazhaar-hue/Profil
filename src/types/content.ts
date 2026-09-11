export type LeadershipRole = "Ketua Umum" | "Sekretaris" | "Bendahara" | "Kepala Bidang";

export interface Leader {
  name: string;
  role: LeadershipRole;
  division?: string;
  portraitKey?: string;
}

export interface DivisionMember {
  name: string;
  compartment: string;
}

export interface Division {
  id: string;
  name: string;
  head: string;
  members: DivisionMember[];
}
