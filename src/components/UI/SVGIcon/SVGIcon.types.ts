export type ViewBoxSize = `${number} ${number} ${number} ${number}`;

export type IconImporter = () => Promise<{ default: React.ComponentType<any> }>;

export type IconRegistry = {
  [key: string]: IconImporter;
};
