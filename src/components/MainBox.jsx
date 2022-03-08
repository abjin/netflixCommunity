import React, { useEffect, useState } from "react";
import PostDoor from "./PostDoor";
import "../page/style/MainBox.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import PostBox from "./PostBox";
function MainBox() {
  const { page } = useParams();
  const page_data = [
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
  ];
  return (
    <div className="MainBox">
      <PostBox list={page_data[page]}></PostBox>
    </div>
  );
}

export default MainBox;

// HOME:
//한국인의 Top 10 콘텐츠
//신규 콘텐츠
//넷플릭스 오리지널
//인생작 소개
//자유 개시판
//어워드 수상작

// 시리즈
// Top 10 시리즈
// 액션 & 어드밴처
// 한국인이 만든 시리즈
// 미국 TV 프로그램
// 청춘 드라마
// 리얼리티, 버라이어티&토크쇼
// 다큐멘터리
// 애니메이션

// 영화
// Top 10 영화
// 한국영화
// 할리우드 영화
// 로맨틱한 영화
// 스릴러 & 액션
// 코미디
// SF 어드벤처
// 공포
