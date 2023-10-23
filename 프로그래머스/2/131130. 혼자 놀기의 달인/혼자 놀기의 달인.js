function solution(cards) {
    let visited = Array(cards.length + 1).fill(0)
    visited[0] = 1
    let [group, result] = [[], []]
    let idx = cards[0]
    while (1) {
        if (visited.indexOf(0) === -1) { // 더이상 방문할 원소가 없는 경우
            result.push(group)
            break
        } else if (!visited[idx]) { // 방문하지 않은 경우 방문 처리
            visited[idx] = 1
            group.push(idx)
            idx = cards[idx - 1]
        } else { // 이미 방문한 경우 == 그룹 완성
            idx = visited.indexOf(0)
            result.push(group)
            group = []
        }
    }
    result.sort((a, b) => b.length - a.length) // 배열 길이 순으로 정렬
    return result.length !== 1 ? result[0].length * result[1].length : 0 // 가장 높은 길이의 두 그룹 곱수 반환
}