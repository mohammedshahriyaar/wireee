// lib/types.ts

export type Packet = {
    type: 'HTTP' | 'ICMP';
    content: string;
  };
  
  export type ApiResponse = {
    message: string;
    packets: Packet[];
  };
  