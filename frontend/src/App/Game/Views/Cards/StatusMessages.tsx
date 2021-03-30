import { Card } from 'app/share/Card';
import React from 'react';

export const StatusMessages: React.FC<{ message: string }> = ({ message }) => (
  <Card>
    <p className="p-style-1">{message}</p>
  </Card>
);
