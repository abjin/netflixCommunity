export const page_data = [
  {
    id: 0,
    board: "home",
    list: [
      "한국인의 Top 10 콘텐츠",
      "신규 콘텐츠",
      "넷플릭스 오리지널",
      "인생작 소개",
      "자유 개시판",
      "어워드 수상작",
    ],
  },
  {
    id: 1,
    board: "series",
    list: [
      "Top 10 시리즈",
      "액션 & 어드밴처",
      "한국인이 만든 시리즈",
      "미국 TV 프로그램",
      "청춘 드라마",
      "리얼리티, 버라이어티&토크쇼",
      "다큐멘터리",
      "애니메이션",
    ],
  },
  {
    id: 2,
    board: "movie",
    list: [
      "Top 10 영화",
      "한국영화",
      "할리우드 영화",
      "로맨틱한 영화",
      "스릴러 & 액션",
      "코미디",
      "SF 어드벤처",
      "공포",
    ],
  },
  {
    id: 3,
    board: "new",
    list: ["NEW! 요즘 대세 콘텐츠"],
  },
];

export const board_name = (bordId) => {
  const page = parseInt(bordId / 10);
  const detail = bordId % 10;

  return page_data[page].list[detail];
};

export const bordUrl = (bordId, id) => {
  const page = parseInt(bordId / 10);
  const detail = bordId % 10;
  return "/home/" + page + "/" + detail + "/" + id;
};
