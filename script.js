document.addEventListener('DOMContentLoaded', () => {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const slideSidebar = document.getElementById('sidebar');
  
    // 삼단바 버튼 클릭 시 사이드바 토글
    sidebarToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      slideSidebar.classList.toggle('show');
    });
  
    // 화면 클릭 시 슬라이드 사이드바 닫기
    document.addEventListener('click', (e) => {
      if (!slideSidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
        slideSidebar.classList.remove('show');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const homeBtn = document.getElementById('homeBtn');
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    const switchToSignup = document.getElementById('switchToSignup');
    console.log(document.getElementById('loginBtn')); // 로그인 버튼 확인
    console.log(document.getElementById('signupBtn')); // 회원가입 버튼 확인
    console.log(document.getElementById('modal')); // 모달 확인

  
    document.addEventListener('DOMContentLoaded', () => {
      adjustModalSize(); // 모달 초기화
      window.addEventListener('resize', adjustModalSize); // 창 크기 변경 시
    });

    // 로그인 버튼 클릭 시 모달 표시
    loginBtn.addEventListener('click', () => {
      showLoginForm();
      modal.classList.add('show');
    });
  
    // 회원가입 버튼 클릭 시 모달 표시
    signupBtn.addEventListener('click', () => {
      showSignupForm();
      modal.classList.add('show');
    });
  
    // 홈으로 돌아가기 버튼 클릭 시 모달 닫기
    homeBtn.addEventListener('click', () => {
      modal.classList.remove('show');
    });
  
    // 회원가입 폼으로 전환
    switchToSignup.addEventListener('click', showSignupForm);
  
    // 로그인 폼 표시
function showLoginForm() {
  modalContent.innerHTML = `
    <button id="homeBtn" class="home-btn">홈으로</button>
    <h2>로그인</h2>
    <form>
      <input type="text" placeholder="ID" required>
      <input type="password" placeholder="PW" required>
      <div class="remember-me">
        <input type="checkbox" id="remember">
        <label for="remember">아이디 저장</label>
        <a href="#">아이디/비밀번호 찾기</a>
      </div>
      <button type="submit">로그인</button>
      <button type="button" id="switchToSignup">회원가입</button>
    </form>
  `;
  // 동적으로 생성된 버튼에 이벤트 리스너 추가
  const homeBtn = document.getElementById('homeBtn');
  const switchToSignup = document.getElementById('switchToSignup');
  homeBtn?.addEventListener('click', () => modal.classList.remove('show'));
  switchToSignup?.addEventListener('click', showSignupForm);
}

// 회원가입 폼 표시
function showSignupForm() {
  modalContent.innerHTML = `
    <button id="homeBtn" class="home-btn">홈으로</button>
    <h2>회원가입</h2>
    <form>
      <input type="text" placeholder="아이디(필수)" required>
      <input type="password" placeholder="비밀번호(필수)" required>
      <input type="password" placeholder="비밀번호 확인(필수)" required>
      <input type="text" placeholder="사용자 이름(필수)" required>
      <input type="email" placeholder="이메일" required>
      <input type="tel" placeholder="전화번호" required>
      <button type="submit">회원가입</button>
    </form>
  `;
  // 동적으로 생성된 버튼에 이벤트 리스너 추가
  const homeBtn = document.getElementById('homeBtn');
  const switchToLogin = document.getElementById('switchToLogin');
  homeBtn?.addEventListener('click', () => modal.classList.remove('show'));
  switchToLogin?.addEventListener('click', showLoginForm);
}

  });
  // 모달 크기 조정 함수 추가
function adjustModalSize() {
  const modalContent = document.querySelector('.modal-content');
  if (window.innerHeight < 600) {
    modalContent.style.width = '280px';
  } else {
    modalContent.style.width = '320px';
  }
}

// 창 크기 변경 시 모달 크기 조정
window.addEventListener('resize', adjustModalSize);

// 페이지 로드 시 모달 크기 초기화
document.addEventListener('DOMContentLoaded', () => {
  adjustModalSize();
});