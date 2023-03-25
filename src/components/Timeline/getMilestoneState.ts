import {type MilestoneState} from './Milestone';

export const getMilestoneState = (selectedIndex: number, milestoneIndex: number): MilestoneState => {
	if (milestoneIndex < selectedIndex) {
		return 'previous';
	}

	if (milestoneIndex === selectedIndex) {
		return 'current';
	}

	return 'next';
};
