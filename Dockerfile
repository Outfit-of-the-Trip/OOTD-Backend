# Node.js 이미지와 Python 이미지를 함께 사용하는 Dockerfile

# Node.js 이미지를 기본 이미지로 사용
FROM node:14

# 작업 디렉토리 설정
WORKDIR /app

# 패키지 파일 복사
COPY package.json .
COPY package-lock.json .

# Node.js 패키지 설치
RUN npm install

# Python 및 pip 설치
RUN apt-get update && apt-get install -y python3 python3-pip

# Python 패키지 설치 (requirements.txt 파일 필요)
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# 소스 코드 복사
COPY . .

# 포트 노출
EXPOSE 3000

# 앱 실행
CMD ["npm", "start"]
