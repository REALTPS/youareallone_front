const START = 'status/START';
const RUNNING = 'status/RUNNING';
const SUBMIT = 'status/SUBMIT';

export const setStart = () => ({ type: START });
export const setRun = () => ({ type: RUNNING });
export const setSubmit = () => ({ type: SUBMIT });

export default function reducer(state = initialState, action) {
  // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
  // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됩니다.
  switch (action.type) {
    case START:
      return { number: state.number + 1 };
    case RUNNING:
      return { number: state.number - 1 };
    case SUBMIT:
      return;
    default:
      return state; // 아무 일도 일어나지 않으면 현재 상태를 그대로 반환합니다.
  }
}
