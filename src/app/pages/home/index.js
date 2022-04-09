import React from "react";
import { Slider } from "./../../modules/home/home_select_slider";
import { HomeOragh } from "./../../modules/home/home_select_oragh";
import { PostsSelectLastpost } from "../../modules/posts/posts_select_lastpost";
import { PropertyHome } from "./../../modules/home/home_select_property";
import { ServisesHome } from "../../modules/home/home_select_servises";

function Index() {
  return (
    <div>
      <Slider style={{ backgroundColor: "#E8EBEE" }} />
      <HomeOragh />
      <div
        className="row mt-10"
        // className={`${Styles.sliderHeight} `}
      >
        <div className="col-lg-6">
          <PostsSelectLastpost
            title="پست های اخیر"
            className="card-stretch gutter-b"
            data3={true}
            paginationShow={true}
            home={true}
            payload={{
              size: "6",
              filter: {
                parent_post_id: "null"
              }
            }}
          />
        </div>
        <div className="col-lg-6">
          <PostsSelectLastpost
            title="تحلیل های ویژه"
            className="card-stretch gutter-b"
            paginationShow={true}
            home={true}
            // dataTwo={true}
            dataTwo={true}
            payload={{
              size: "6",
              filter: {
                parent_post_id: "null",
                forum_name: "تحلیل های ویژه"
              }
            }}
          />
        </div>
      </div>
      <div>
        <PropertyHome />
      </div>
      <div className="mt-5">
        <ServisesHome />
      </div>
    </div>
  );
}

export default Index;
