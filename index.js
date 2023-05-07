import scribbletune from 'scribbletune';
import drumLoops from './components/drumloops/index.js';
// import { Kick } from './components/d/kick.js';
const ROOT = 'B2';
const SCALE = 'major';

const getRandomPattern = function (count) {
	let str = '[x-]R';
	for (let i = 1; i < (count || 8); i++) {
	  str += Math.round(Math.random()) ? '[x-]R' : 'R[x-]';
	}
  
	return str;
  }

const getRiff = (note) => {
	return scribbletune.clip({
		notes: 'D2',
		randomNotes: scribbletune.getChordsByProgression('D2 minor', 'ii iii'),
		subdiv: '16n',
		pattern: getRandomPattern() + getRandomPattern(),
	});
};

const clipA = scribbletune.clip({
	notes: ROOT,
	randomNotes: scribbletune.arp(scribbletune.getChordsByProgression(ROOT + ' ' + SCALE, 'vi v' )),
	pattern: getRandomPattern() + getRandomPattern(),
	subdiv: '16n'
})

const clipB = scribbletune.clip({
	notes: ROOT,
	randomNotes: scribbletune.arp(scribbletune.getChordsByProgression(ROOT + ' ' + SCALE, 'vi v')),
	pattern: getRandomPattern(),
	subdiv: '16n'
})

scribbletune.midi([].concat(clipA, clipA, clipA, clipB), 'riff.mid');
drumLoops();