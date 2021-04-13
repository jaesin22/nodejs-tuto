import {
    LOGIN_USER, REGISTER_USER
} from '../_actions/types';

export default function(state = {}, action) {
    switch(action.type) {
        case LOGIN_USER:
            return {... state, loginSuccess: action.payload}

            break;
        case REGISTER_USER:
            return {...state, register: action.payload }
            break;

        default:
            return state;

    }


}
// 하나님의 약속 새언약 계시록 어디까지 이루어졌나 > 신앙관리
// 3월 28일 편지글 > 전도
// 전도가 다 부담스럽습니다. 그렇지만 우리가 1인1명 하고 노력하고 최선을 다하는 모습 하늘에 보여드린 도와줄 거라 믿습니다. 노력해서 이루어 나갑시다.
// 다시 그래프를 볼까요 ? 예배 출석률 평균 98%까지 끌어올리자
// 더 발전하는 사명자가 되자
// 김포가 부진하다. 중간까지 올리자. 체계를 구축하자. 연구하자 
// 인맞는것과 전도는 같이 가야 한다. 복방단계에서 합자를 잘 갖춰야 한다. 서울은 가시밭 부분이 크다. 물질적으로
// 센터까지는 앉힐 수 있다. 강권해서. 그렇지만 좋은고기 못된 고기 골라내라 했으니 이것은 센터의 역할이다. 부서에서 잘 담아서 보내야 한다.
// 잘 창조해야 한다. 센터가 잘해야 한다. 