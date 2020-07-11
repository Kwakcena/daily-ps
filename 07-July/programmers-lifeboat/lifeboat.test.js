function solution(people, limit) {
  people = people.sort((a, b) => a - b);
  const len = people.length;
  
  let start = 0, end = len - 1, boat = 0;
  while(start <= end) {
      if(people[start] + people[end] <= limit) {
          start += 1;
      }
      end -= 1;
      boat++;
  }
  return boat;
}