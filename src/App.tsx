import './App.css'

const tasks = [
  { title: '월요타임 공부하기', done: true },
  { title: '운동하기', done: true },
  { title: '영어 단어 30개 외우기', done: true },
  { title: '프로젝트 기능 구현', done: false },
  { title: '블로그 글 작성', done: false },
]

const records = [
  { date: '05.19 (월)', progress: '80%', point: '+130P', trophy: false },
  { date: '05.18 (일)', progress: '100%', point: '+150P', trophy: true },
  { date: '05.17 (토)', progress: '60%', point: '+90P', trophy: false },
]

const memoItems = [
  '프로젝트 회의: 5/21 (수) 오전 10시',
  'UI 디자인 피드백 반영',
  '배포 전 버그 체크 리스트 작성',
  '운동 루틴 변경하기',
]

const navItems = [
  { icon: '⌂', label: '홈', active: true },
  { icon: '□', label: '플래너', active: false },
  { icon: '✎', label: '메모', active: false },
  { icon: '▥', label: '기록', active: false },
]

function App() {
  return (
    <main className="planner-shell" aria-label="Lumi Planner preview">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-star">★</span>
          <span>Lumi Planner</span>
        </div>

        <div className="moon-card" aria-hidden="true">
          <div className="star-field">
            <span className="moon"></span>
            <span className="star star-one">✦</span>
            <span className="star star-two">✦</span>
            <span className="star star-three">✦</span>
            <span className="star star-four">✦</span>
          </div>
          <div className="cloud cloud-one"></div>
          <div className="cloud cloud-two"></div>
        </div>

        <nav className="nav-list" aria-label="Main navigation">
          {navItems.map(({ icon, label, active }) => (
            <button className={active ? 'nav-item active' : 'nav-item'} type="button" key={label}>
              <span>{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        <section className="summary-card">
          <h2>✧ 오늘의 요약</h2>
          <div className="summary-row">
            <span>진행률</span>
            <strong>60%</strong>
          </div>
          <div className="bar">
            <span style={{ width: '60%' }}></span>
          </div>
          <p>3 / 5 완료</p>
          <div className="summary-divider"></div>
          <span className="streak-label">연속 달성</span>
          <strong className="streak">🔥 12일</strong>
        </section>

        <section className="point-card">
          <span>보유 포인트</span>
          <strong><i>★</i> 1,250 P</strong>
          <div className="point-row">
            <span>오늘 획득</span>
            <b>+120 P</b>
          </div>
          <div className="point-row">
            <span>다음 보상까지</span>
          </div>
          <div className="reward-bar">
            <span></span>
          </div>
          <small>250 / 500 P</small>
        </section>

        <section className="quote-card">
          <strong>☁ 오늘의 한마디</strong>
          <p>작은 습관이<br />큰 변화를 만들어!</p>
          <span>✧</span>
        </section>

        <LumiCharacter small />
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <time dateTime="2025-05-20">2025년 5월 20일 (화)</time>
            <span>☀️</span>
          </div>
          <button type="button">⚙ 설정</button>
        </header>

        <section className="task-card">
          <div className="section-head">
            <h1>오늘 할 일</h1>
            <button type="button">＋ 추가</button>
          </div>
          <ul className="task-list">
            {tasks.map((task) => (
              <li className={task.done ? 'task done' : 'task'} key={task.title}>
                <span className="check">{task.done ? '✓' : ''}</span>
                <span>{task.title}</span>
                <b>+10P</b>
              </li>
            ))}
          </ul>
          <p className="bonus">완료 시 50P 보너스!</p>
        </section>

        <div className="metric-grid">
          <section className="metric-card progress-card">
            <h2>오늘 진행률</h2>
            <div className="progress-ring" aria-label="60 percent complete">
              <span>60%</span>
            </div>
            <p>3 / 5 완료</p>
          </section>

          <section className="metric-card earned-card">
            <h2>획득 포인트</h2>
            <div className="coin">★</div>
            <strong>120 P</strong>
            <p>할 일 완료로 획득했습니다!</p>
          </section>
        </div>

        <section className="memo-card">
          <div className="section-head">
            <h2>메모</h2>
            <button type="button" aria-label="메모 편집">✐</button>
          </div>
          <ul>
            {memoItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="history-card">
          <div className="section-head">
            <h2>최근 기록</h2>
            <button type="button">전체 보기</button>
          </div>
          <div className="record-list">
            {records.map((record) => (
              <div className="record-row" key={record.date}>
                <span>{record.date}</span>
                <span>{record.progress}</span>
                <strong>{record.point} {record.trophy ? '🏆' : ''}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="chat-dock">
          <LumiCharacter />
          <div className="speech-bubble">
            <strong>루미 <span>✧</span></strong>
            <p>오늘 할 일 2개 남았어!<br />조금만 더 집중하면 다 끝낼 수 있을 거야!</p>
          </div>
          <time>오후 1:15 ☀️</time>
          <div className="chat-input">
            <input aria-label="답장을 입력하세요" placeholder="답장을 입력하세요..." />
            <button type="button">전송</button>
          </div>
        </section>
      </section>
    </main>
  )
}

function LumiCharacter({ small = false }: { small?: boolean }) {
  return (
    <div className={small ? 'lumi-character small' : 'lumi-character'} aria-label="루미 캐릭터">
      <div className="lumi-hair">
        <span className="hair-star">✦</span>
        <div className="lumi-face">
          <span className="eye left"></span>
          <span className="eye right"></span>
          <span className="mouth"></span>
        </div>
      </div>
      <div className="lumi-body">
        <span className="arm left"></span>
        <span className="arm right"></span>
        <span className="skirt"></span>
      </div>
      <div className="lumi-legs">
        <span></span>
        <span></span>
      </div>
      {small && (
        <div className="pet" aria-hidden="true">
          <span></span>
        </div>
      )}
    </div>
  )
}

export default App
