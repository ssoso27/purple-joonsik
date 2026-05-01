---
name: context-update
description: 현재 세션의 작업 내용을 .claude-context.md에 기록합니다. "/context", "컨텍스트 업데이트", "save context", "작업 저장" 요청 시 사용.
---

# Context Update

현재 세션에서 수행한 작업을 `.claude-context.md`에 기록하여 다음 세션에서 이어서 작업할 수 있도록 합니다.

## 사용 시점

- 세션 종료 전 작업 내용 저장
- 중요한 진행 상황 기록
- 다음 작업자(또는 미래의 자신)에게 인계

## 워크플로우

### 1단계: 컨텍스트 파일 확인

```bash
cat .claude-context.md
```

파일이 없으면 생성:
```markdown
# Worktree Context

| Field | Value |
|-------|-------|
| Created | {현재시간} |
| Branch | {현재브랜치} |
| Issue | {JIRA티켓} |
| Status | 🟡 In Progress |
| Last Session | {현재시간} |
```

### 2단계: 현재 상태 수집

```bash
# 최근 커밋 확인
git log --oneline -5

# 변경된 파일 확인
git diff --stat

# 브랜치 상태
git status --short
```

### 3단계: 컨텍스트 업데이트

사용자에게 확인할 내용:

1. **Work Summary**: 이번 세션에서 무엇을 했나요?
2. **What's Done**: 완료된 항목 체크
3. **What's Next**: 다음에 할 작업
4. **Key Decisions**: 중요한 결정사항 (선택)

### 4단계: 파일 업데이트

`.claude-context.md`를 수정:

1. `Last Session` 타임스탬프 업데이트
2. `Session Log`에 새 항목 추가:
   ```markdown
   - YYYY-MM-DD HH:MM: {작업 요약} ({변경된 파일 수} files)
   ```
3. `What's Done` / `What's Next` 체크박스 업데이트
4. `Work Summary` 갱신 (필요시)

## 업데이트 예시

**Before:**
```markdown
## What's Done

- [ ] API 엔드포인트 구현
- [ ] 테스트 작성

## Session Log

- 2024-02-04 12:00: Worktree 생성
```

**After:**
```markdown
## What's Done

- [x] API 엔드포인트 구현
- [ ] 테스트 작성

## Session Log

- 2024-02-04 12:00: Worktree 생성
- 2024-02-04 14:30: ChartGroup API 구현 완료 (3 files)
```

## 자동화 힌트

커밋 후 자동 업데이트를 원하면 `/exodus-commit` 스킬과 연동:
1. 커밋 완료 후 Session Log에 자동 추가
2. 커밋 메시지를 기반으로 요약 생성

## 연관 스킬

- `/context-load` - 이전 컨텍스트 불러오기
- `/exodus-commit` - 커밋과 함께 로그 기록
- `/wstatus` - 워크트리 상태 확인
