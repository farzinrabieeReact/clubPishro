import { all } from "redux-saga/effects";
import { EMPTYALLREDUCERS } from "./type";
import { combineReducers } from "redux";
import * as auth from "../app/modules/Auth/_redux/authRedux";
import { profile } from "./../redux/profile/clubmember_select_info";
import { reducer_notificationAlert } from "./notificationAlert";
import { profileIntroducing } from "./profile/clubmember_select_invitedlist";
import { reducerProfile } from "./profile/clubmember_select_info";
import { reducerProfileIntroducing } from "./profile/clubmember_select_invitedlist";
import { profileInvitation } from "./profile/clubmember_select_info/invitation_insert_link";
import { profilefollowedList } from "./profile/clubmember_select_followedlist";
import { reducerProfilefollowedList } from "./profile/clubmember_select_followedlist";
import {
  reducer_select_archive_competitions,
  watcher_archive_competitions
} from "../redux/education/competitions_select_archiveCompetitions/index";
import {
  watcherPostLast6,
  reducerPostLast6
} from "./posts/posts_select_lastpost6";
import {
  reducer_select_forum,
  watcher_select_forum
} from "./posts/posts_select_forum";
import { changePassword } from "./profile/password_update_changepassword";
import { reducerRegistration } from "./profile/clubmember_update_resistrationLevel2";
import {
  clubmember_select_refCode_reducer,
  refCodeSelect
} from "./profile/clubmember_select_ref_code";
import {
  clubmember_select_userName_reducer,
  userNameSelect
} from "./profile/clubmember_select_userName";
import {
  reducer_notification_select_notificationLast4,
  notification_select_notificationLast4
} from "./notifications/notification_select_notificationLast4";
import {
  faq_select_list,
  reducer_faq_select_list
} from "./about/faq/faq_select_list";
import {
  reducer_branch_select_list,
  branch_select_list
} from "./about/branchPage/branch_select_list";
import {
  reducer_goverments_select_list,
  goverments_select_list
} from "./about/goverments/goverments_select_list";
import {
  reducer_job_opportunities_select_list,
  job_opportunities_select_list
} from "./about/jobOpportunities/jobOpportunities_select_list";
import {
  reducer_accounts_select_list,
  accounts_select_list
} from "./static/accounts/accounts_select_list";
import {
  reducer_credit_select_list,
  credit_select_list
} from "./static/credit/credit_select_list";
import {
  reducer_education_select_list,
  education_select_list
} from "./static/education/education_select_list";
import {
  reducer_about_select_list,
  about_select_list
} from "./about/about/about_select_list";
import {
  reducer_select_activeCompetitions,
  watcher_activeCompetitions
} from "./education/competitions_select_activeCompetitions";
import {
  reducer_select_archive_participations,
  watcher_archive_participations
} from "./education/competitions_select_participations";
import { watcher_insert_participate } from "./education/competitions_select_activeCompetitions/competition_insert_participate";
import {
  watcherStockList,
  reducerStockList
} from "./market/stock_select_summaries";
import {
  watcherDetailPost,
  reducerDetailPost
} from "./posts/posts_select_detailsPost";
import {
  watcherPostGoldAndCurrency,
  reducerPostGoldAndCurrency
} from "./posts/posts_select_sidebarGoldAndCurrency";
import {
  watcherPostSidebar,
  reducerPostSidebar
} from "./posts/posts_select_sidebar";
import {
  watcherSelectComments,
  reducerSelectComments
} from "./posts/posts_select_commentList";
import {
  reducerActiveCourse,
  watcherActiveCourse
} from "./education/courses/course_select_activeCourse";
import {
  reducerRegsterCourse,
  watcherRegsterCourse
} from "./education/courses/course_select_regsterCourse";
import {
  reducerCategoryPopularCourse,
  watcherCategoryPopularCourse
} from "./education/courses/course_select_CategoryPopular";
import {
  reducerRegsterInsertCourse,
  watcherRegsterInsertCourse
} from "./education/courses/course_insert_regsterCourse";
import {
  reducerRemoveCourse,
  watcherRemoveCourse
} from "./education/courses/course_delete_removeCourse";
import {
  reducerNotificationSelectList,
  notificationSelectList
} from "./notifications/notification_select_list";
import {
  notification_email_select_reducer,
  notification_email_select
} from "./notifications/notification_email_select";
import {
  notification_sms_select_reducer,
  notification_sms_select
} from "./notifications/notification_sms_select";
import {
  notification_web_select_deactivate_reducer,
  notification_web_select_deactivate
} from "./notifications/notification_web_select_deactivate";

import {
  reducerFeedbackSelectList,
  watcherFeedbackSelectList
} from "./about/feedback/feedback_select_list";
import { reducer_bonus_select_list } from "./bonus/bonus/bonus_select-list/index";
import { reducer_brochure_select_list } from "./static/brochure/brochure_select_list/index";
import {
  reducer_symbolInformation_select_list,
  symbolInformation_select_list
} from "./market/stock_select_details";

import { bonus_select_list } from "./bonus/bonus/bonus_select-list";
import { brochure_select_list } from "./static/brochure/brochure_select_list";

import {
  reducerStockSelectProtfolio,
  watcherStockSelectProtfolio
} from "./market/stock/stock_select_protfolio";
import {
  watcherSelectSlider,
  reducer_select_slider
} from "./home/home_select_slider";
import {
  reducerOrderDetailsAggregates,
  watcherOrderDetailsAggregates
} from "./market/stock/stock_select_details_aggregates";
import {
  reducerStockChangeBroker,
  watcherStockChangeBroker
} from "./market/stock/stock_select_changeBroker";
import {
  reducerStockPaymentDetails,
  watcherStockPaymentDetails
} from "./market/stock/stock_select_payment_details";

import {
  reducergiftSelectActiveCategorisList,
  giftSelectActiveCategorisList
} from "./gift/git_select_activeCategories";
import {
  reducergiftMeSelectAffordable,
  giftMeSelectAffordable
} from "./gift/giftMe_select_affordable";
import {
  reducerGiftSelectActiveSubCategoryList,
  giftSelectActiveSubCategoryList
} from "./gift/gift_select_activeSubCategory";
import {
  reducergiftSelectActiveList,
  giftSelectActiveList
} from "./gift/gift_select_activeGift";
import {
  reducerGiftSelectOrder,
  giftSelectOrder
} from "./gift/gift_select_order";
import {
  reducerStockRemain,
  watcherStockRemain
} from "./market/stock/stock_select_remain";
import {
  reducerStockOfflineOrders,
  watcherStockOfflineOrders
} from "./market/stock/stock_select_offlineOrders";
import {
  reducer_ipo_select_list,
  select_active_ipo
} from "./market/stock/ipo_select_active/index";
import { insert_register_ipo } from "./market/stock/ipo_insert_register";
import {
  reducer_ipo_selectRegister_list,
  select_register_ipo
} from "./market/stock/ipo_select_registered";
import { update_register_ipo } from "./market/stock/ipo_update_cancel";
import {
  reducerStockPaymentInfo,
  watcherStockPaymentInfo
} from "./market/stock/stock_select_payment_info";
import {
  reducer_get_kyc_profile,
  watcher_get_kyc_profile
} from "./profile/clubmember_select_get_kyc_profile";
import { reducerLightstreamer, watcherLightstreamer } from "./lightstreamer";

import {
  reducerStockDetailsPortfolio,
  watcherStockDetailsPortfolio
} from "../redux/market/stock/stock_select_details_portfolio/index";
import {
  reducerStockListSearch,
  watcherStockListSearch
} from "../redux/market/stock_select_summaries_search/sock_select_summries_search";
import {
  reducer_clubmember_select_bonus,
  bonusSelect
} from "../redux/profile/clubmember_select_bonus/index";

import {
  authCustomerSelectStepOne,
  authCustomer_select_stepOne_reducer
} from "../redux/authCustomer/authCustomer_select_stepOne";
import { authCustomer_loading } from "../redux/authCustomer/authCusotmer_Loading";

import {
  select_lottery_reducer,
  selectLottery
} from "./lottery/select_lottery/index";

import {
  basketSelectSubmited,
  basket_Select_Submitted_reducer
} from "./basket/basket_select_submited_gifts/index";
import {
  basket_Select_gift_reducer,
  basketSelectGift
} from "./basket/basket_select_gift/index";
const appReducer = combineReducers({
  auth: auth.reducer,
  ///notificationAlert
  reducer_notificationAlert,
  reducerNotificationSelectList,
  notification_email_select_reducer,
  notification_sms_select_reducer,
  notification_web_select_deactivate_reducer,
  reducerStockListSearch,

  ///////////profile
  reducerProfile,
  reducerProfileIntroducing,
  reducer_get_kyc_profile,
  // profilefollowedList,
  reducerProfilefollowedList,
  reducerRegistration,
  clubmember_select_refCode_reducer,
  clubmember_select_userName_reducer,
  //////////////post
  reducerPostLast6,
  reducer_notification_select_notificationLast4,
  reducer_faq_select_list,
  reducer_select_forum,
  reducerDetailPost,
  reducerPostGoldAndCurrency,
  reducerPostSidebar,
  reducerSelectComments,

  // banch && goverments
  reducer_branch_select_list,
  reducer_goverments_select_list,

  //job_opportunities
  reducer_job_opportunities_select_list,

  // static
  reducer_accounts_select_list,
  reducer_credit_select_list,
  reducer_education_select_list,
  reducer_about_select_list,
  reducer_select_slider,

  //education
  reducer_select_activeCompetitions,
  reducer_select_archive_participations,
  reducerActiveCourse,
  reducerRegsterCourse,
  reducerCategoryPopularCourse,
  reducerRegsterInsertCourse,
  reducerRemoveCourse,
  reducer_select_archive_competitions,

  //feedback
  reducerFeedbackSelectList,

  //market
  reducerStockList,
  reducerStockRemain,
  reducerStockOfflineOrders,
  reducerStockSelectProtfolio,
  reducerOrderDetailsAggregates,
  reducerStockChangeBroker,
  reducerStockPaymentInfo,
  reducerStockPaymentDetails,
  reducerStockDetailsPortfolio,

  //bonus
  reducer_bonus_select_list,

  //gift
  reducergiftSelectActiveCategorisList,
  reducerGiftSelectActiveSubCategoryList,
  reducergiftSelectActiveList,
  reducerGiftSelectOrder,
  reducergiftMeSelectAffordable,

  //brochure
  reducer_brochure_select_list,
  //symbolInformation
  reducer_symbolInformation_select_list,

  // ipo
  reducer_ipo_select_list,
  reducer_ipo_selectRegister_list,

  reducerLightstreamer,
  authCustomer_select_stepOne_reducer,
  authCustomer_loading,
  select_lottery_reducer,
  reducer_clubmember_select_bonus,
  basket_Select_Submitted_reducer,
  basket_Select_gift_reducer
});

export function* rootSaga() {
  yield all([
    profileInvitation(),
    profilefollowedList(),
    watcherPostLast6(),
    changePassword(),
    auth.saga(),
    profile(),
    profileIntroducing(),
    notification_select_notificationLast4(),
    faq_select_list(),
    branch_select_list(),
    goverments_select_list(),
    job_opportunities_select_list(),
    accounts_select_list(),
    credit_select_list(),
    education_select_list(),
    about_select_list(),
    bonus_select_list(),
    watcher_activeCompetitions(),
    watcher_insert_participate(),
    watcher_archive_participations(),
    watcherActiveCourse(),
    watcherRegsterCourse(),
    watcherCategoryPopularCourse(),
    watcherRegsterInsertCourse(),
    watcherRemoveCourse(),
    watcherFeedbackSelectList(),
    notification_web_select_deactivate(),
    notification_sms_select(),
    notification_email_select(),
    notificationSelectList(),
    watcher_select_forum(),
    watcherStockList(),
    watcherDetailPost(),
    watcherPostGoldAndCurrency(),
    watcherPostSidebar(),
    watcherSelectComments(),
    brochure_select_list(),
    symbolInformation_select_list(),
    giftSelectActiveCategorisList(),
    giftSelectActiveSubCategoryList(),
    giftSelectActiveList(),
    giftSelectOrder(),
    giftMeSelectAffordable(),
    watcherStockRemain(),
    watcherStockOfflineOrders(),
    watcherStockSelectProtfolio(),
    watcherSelectSlider(),
    watcherOrderDetailsAggregates(),
    select_active_ipo(),
    insert_register_ipo(),
    select_register_ipo(),
    update_register_ipo(),
    watcherStockChangeBroker(),
    watcherStockPaymentInfo(),
    watcherStockPaymentDetails(),
    watcher_get_kyc_profile(),
    watcherLightstreamer(),
    watcherStockDetailsPortfolio(),
    watcher_archive_competitions(),
    watcherStockListSearch(),
    refCodeSelect(),
    userNameSelect(),
    authCustomerSelectStepOne(),
    selectLottery(),
    bonusSelect(),
    basketSelectSubmited(),
    basketSelectGift()
  ]);
}

export const rootReducer = (state, action) => {
  if (action.type === EMPTYALLREDUCERS) {
    state = undefined;
    localStorage.clear();
  }
  return appReducer(state, action);
};
