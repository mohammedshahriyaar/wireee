// app/api/traffic-boom/route.ts
import { NextResponse } from 'next/server';
import { Packet } from '@/app/lib/types';

// Function to generate a random packet
function generatePacket(index: number, isFlag: boolean): Packet {
  return {
    type: 'HTTP',
    content: isFlag ? 'FLAG{super_secret_flag}' : `HTTP packet ${index} with data: ${Math.random().toString(36).substring(2)}`,
  };
}

// API route handler
export async function GET() {
  const packets: Packet[] = [];

  // Generate packets, randomly place the flag in one packet
  for (let i = 0; i < 10000; i++) {
    const isFlag = i === Math.floor(Math.random() * 10000); // Randomly insert flag
    packets.push(generatePacket(i, isFlag));
    if(i===10000){
        console.log('1000000')
    }
  }

  return NextResponse.json({ message: 'Packets generated successfully.' });
}
