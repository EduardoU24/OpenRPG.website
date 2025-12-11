export type Language = 'en' | 'es';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'code' | 'cloud' | 'consult' | 'factory' | 'rocket';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  isThinking?: boolean;
}