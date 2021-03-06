import { NPC } from '@dcl/npc-scene-utils';
import { ILoveMeebits } from './dialog';

export let myNPC = new NPC(
  {
    position: new Vector3(10, 0.1, 10),
    rotation: Quaternion.Euler(0, 180, 0),
    scale: new Vector3(0.05, 0.05, 0.05)
  },
  'models/meebit_13186_t_solid.glb',
  () => {
    myNPC.talk(ILoveMeebits, 0);
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

myNPC.followPath({
  path: [new Vector3(2, 0, 2), new Vector3(2, 0, 4), new Vector3(6, 0, 2)],
  loop: true,
  curve: true,
  startingPoint: 0,
  onFinishCallback: () => {
    log('Finished!');
  }
});
