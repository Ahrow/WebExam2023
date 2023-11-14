export interface DriverCardProps {
  title?: string;
  imgUrl?: string;
  age?: number;
  nationality?: string;
  skill?: number;
  aggression?: number;
  experience?: number;
}

export interface CarCardProps {
  name?: string;
  speed?: number;
  acceleration?: number;
  handling?: number;
  imgUrl?: string;
}

export interface TrackCardProps {
  name?: string;
  distance?: number;
  turns?: number;
  laps?: number;
  imgUrl?: string;
}
