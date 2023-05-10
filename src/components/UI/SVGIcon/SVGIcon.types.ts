import React from 'react';

export type ViewBoxSize = `${number} ${number} ${number} ${number}`;
export type IconImporter = () => Promise<{ default: React.ComponentType<any> }>;
