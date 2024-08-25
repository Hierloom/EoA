import { CONFIG } from '@league-of-foundry-developers/foundry-vtt-types';
import { EoAActor } from './module/documents/actor.ts';

const EoA = {
};

export interface GameEoA extends Game<EoAActor> {
  eoa: typeof EoA;
}

declare global {
    interface CONFIG {
      EoA?: typeof EoA; // Adjust the type as necessary
    }

    var game: GameEoA;
}