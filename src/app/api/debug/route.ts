import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  const stuckScans = await prisma.scan.findMany({
    where: { status: 'RUNNING' }
  });
  
  if (stuckScans.length > 0) {
    await prisma.scan.updateMany({
      where: { status: 'RUNNING' },
      data: { status: 'PENDING' }
    });
  }

  const allScans = await prisma.scan.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10
  });

  return NextResponse.json({ 
    resetCount: stuckScans.length, 
    scans: allScans 
  });
}
