function mergeRanges(meetings) {
  meetings.sort(function (a, b) {
    return a.startTime - b.startTime;
  })
  var solution = [meetings[0]];
  for (var i = 1; i < meetings.length; i++) {
    if (meetings[i].startTime <= solution[solution.length - 1].endTime) {
      solution[solution.length - 1].endTime = Math.max(solution[solution.length - 1].endTime, meetings[i].endTime);
    } else {
      solution.push(meetings[i]);
    }
    // console.log(solution);
  }
  return solution;
}
//O(n log n) time and O(n) space

var example = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
];
console.log(mergeRanges(example));

/*
  function mergeRanges(meetings) {

  // Create a deep copy of the meetings array
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));

  // Sort by start time
  const sortedMeetings = meetingsCopy.sort((a, b) => {
    return a.startTime - b.startTime;
  });

  // Initialize mergedMeetings with the earliest meeting
  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting    = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    // If the current meeting overlaps with the last merged meeting, use the
    // later end time of the two
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
    } else {

      // Add the current meeting since it doesn't overlap
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
}
*/
