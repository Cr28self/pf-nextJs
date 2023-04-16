import Link from "next/link";
import Animation from "./Animation";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          테스트 포폴 페이지
          <br className="hidden lg:inline-block" />
        </h1>
        <p className="mb-8 leading-relaxed">
          풀이 꽃이 아름답고 있다. 청춘이 있음으로써 눈이 남는 일월과 뿐이다.
          천하를 새 청춘에서만 무엇을 것은 주며, 않는 천자만홍이 쓸쓸하랴?
          뛰노는 풀이 이상은 열매를 설산에서 청춘을 주는 피다. 뜨거운지라, 같이
          그들의 고행을 풍부하게 있는가? 아니더면, 생의 있으며, 풍부하게 꾸며
          목숨이 것이다. 심장은 사랑의 무엇을 꽃 목숨이 열매를 커다란 힘있다.
          착목한는 기쁘며, 밝은 놀이 쓸쓸한 가는 철환하였는가? 목숨이 바로
          그들의 인생을 생생하며, 것이다. 가치를 못하다 듣기만 인간의 품었기
          그들의 사라지지 인간이 천지는 철환하였는가? 꾸며 있는 보이는 보배를
          아니다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <button className="btn-project">프로젝트 보러가기</button>
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Animation />
      </div>
    </>
  );
}

export default Hero;
