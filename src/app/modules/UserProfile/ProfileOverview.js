import React from "react";
import { ClubmemberSelectInvitedlist } from "./Clubmember_select_invitedlist";
import { ClubmemberSelectFollowedlist } from "./Clubmember_select_followedlist";
import { PostsSelectLastpost } from "../posts/posts_select_lastpost";
import { getDataInLocalstorage } from "../../common/method/getDataInLocalstorage";


export function ProfileOverview() {
  let author_id = getDataInLocalstorage("member_id")


  return (
    <div className="row">
      <div className="col-lg-6">
        <ClubmemberSelectInvitedlist
          className="card-stretch gutter-b"
        ></ClubmemberSelectInvitedlist>
      </div>

      <div className="col-lg-6">
        <ClubmemberSelectFollowedlist
          className="card-stretch gutter-b"
        ></ClubmemberSelectFollowedlist>
      </div>

      <div className="col-lg-12">
        <PostsSelectLastpost
          title="آخرین پست های شما"
          className="card-stretch gutter-b"
          paginationShow={false}
          payload={{
          size: "6",
          filter: {
            author_id ,
            parent_post_id: "null"
          }
        }}
        />

      </div>

    </div>
  );
}


