import * as React from 'react';
import { PlasmicCanvasHost } from '@plasmicapp/loader-nextjs';
import { PLASMIC } from '@/plasmic-init';
import { Analytics } from "@vercel/analytics/react"

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
