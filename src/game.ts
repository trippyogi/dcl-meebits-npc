import { NPC } from '@dcl/npc-scene-utils';
import { ILoveCats } from './dialog';

export let myNPC = new NPC(
  {
    position: new Vector3(10, 0.1, 10),
    rotation: Quaternion.Euler(0, 180, 0),
    scale: new Vector3(0.05, 0.05, 0.05)
  },
  'models/meebit_13186_t_solid.glb',
  () => {
    myNPC.talk(ILoveCats, 0);
  },
  {
    // idleAnim: `Weight_Shift`,
    faceUser: true,
    // portrait: { path: 'images/catguy.png', height: 128, width: 128 },
    darkUI: true,
    coolDownDuration: 3,
    hoverText: 'CHAT',
    onlyClickTrigger: false,
    onlyExternalTrigger: false,
    reactDistance: 4,
    continueOnWalkAway: true,
    onWalkAway: () => {
      log('walked away');
    }
  }
);
