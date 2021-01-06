# subtitleBOT

## INSTALL
  > yarn install

## Webpeck Build
  > yarn run build

## Webpack Dev Server
  > yarn run dev
  > `start on http://localhost:5500`

## 사용 라이브러리
1. node-fetch: API 요청용
2. puppeteer: 크롤러 (헤드레스 크롬)

## 프로세스

1. 실행
2. API 모듈 실행
 - 결과
    [
      {
        T: _애니명_,
        A: _화수_,
        B: _자막 주소_,
        C: ("DIRECT" | "NAVER" | "TSTORY")
      } ...
    ]
3. 결과 크롤러 컨트롤러로 전달
4. 배열 돌면서
  - 'C' 에 따라서 크롤러 선택
  - 다운로드 진행
  - 결과 기록
5. 끝