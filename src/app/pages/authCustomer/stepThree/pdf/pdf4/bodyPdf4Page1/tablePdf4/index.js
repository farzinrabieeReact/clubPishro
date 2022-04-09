import React from "react";

import {
  Page,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  Text,
} from "@react-pdf/renderer";
const stylePdf = StyleSheet.create({
  main: {
    width: "100%",
    height: "30%",
    //  backgroundColor:'grey',
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 7.4,
    marginBottom: 15,
  },
  main2: {
    width: "100%",
    height: "22%",
    //  backgroundColor:'grey',
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 7.4,
  },
  main3: {
    width: "100%",
    height: "15%",
    //  backgroundColor:'grey',
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 7.4,
    marginBottom: 15,
    marginTop: 10,
  },
  main4: {
    width: "100%",
    height: "45%",
    //  backgroundColor:'grey',
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 7.4,
    marginTop: 10,
  },
  table: {
    width: "99%",
    height: "99%",
    marginTop: 15,
    border: "1px solid black",
    borderRadius: 10,
  },
  tableTitle: {
    width: 70,
    height: 15,
    fontSize: 7.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    color: "white",
    position: "absolute",
    borderRadius: 5,
    right: 10,
    bottom: "97%",
  },
  tableRow: {
    width: "100%",
    height: "11.1%",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 5,
  },
  tableRowLast: {
    width: "100%",
    height: "11.1%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 5,
  },
  tableRow2: {
    width: "100%",
    height: "16.6%",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 5,
  },
  tableRow3: {
    width: "100%",
    height: "25%",
    borderBottom: "1px solid black",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 5,
  },
  tableRow3last: {
    width: "100%",
    height: "25%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 5,
  },
  tableRow2Last: {
    width: "100%",
    height: "16.6%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: 5,
  },
  table4Text: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingTop: 10,
    paddingRight: 5,
  },
  w50: {
    width: "50%",
    textAlign: "right",
    paddingBottom: 3,
  },
  w30: {
    width: "30%",
    textAlign: "right",
    paddingBottom: 3,
  },
  w20: {
    width: "20%",
    textAlign: "right",
    paddingBottom: 3,
  },
  w70: {
    width: "70%",
    textAlign: "right",
    paddingBottom: 3,
  },
  main4Table4Parent: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  main4Table4: {
    width: "60%",
    height: "100%",
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main4Table4Child: {
    flex: 1,
    borderLeft: "1px solid black",
  },
  main4Table4ChilLast: {
    flex: 1,
  },
  titleTable: {
    width: "100%",
    height: "70%",
    borderBottom: "1px solid black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textTable: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  main5Table5Parent: {
    width: "100%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 5,
  },
  main5Table5: {
    width: "90%",
    height: "100%",
    border: "1px solid black",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main4Table4Child: {
    flex: 1,
    borderLeft: "1px solid black",
  },
  main5Table5ChilLast: {
    flex: 1,
  },
  footerText:{
      width:'100%',
      display:'flex',
      alignItems:'flex-end',
      marginTop:5
  }
});

const TablePdf4 = () => {
  return (
    <>
      <View style={stylePdf.main}>
        <View style={stylePdf.table}>
          <View style={stylePdf.tableTitle}>
            <Text>اطلاعات مشتری</Text>
          </View>
          <View style={stylePdf.tableRow}>
            <Text style={stylePdf.w50}>نام:</Text>
            <Text style={stylePdf.w50}>صادره از:</Text>
          </View>
          <View style={stylePdf.tableRow}>
            <Text style={stylePdf.w50}>نام خانوادگی:</Text>
            <Text style={stylePdf.w50}>شماره شناسنامه:</Text>
          </View>
          <View style={stylePdf.tableRow}>
            <Text style={stylePdf.w50}>نام پدر:</Text>
            <Text style={stylePdf.w50}>سریال شناسنامه:</Text>
          </View>
          <View style={stylePdf.tableRow}>
            <Text style={stylePdf.w50}>جنسیت:</Text>
            <Text style={stylePdf.w50}>تاریخ تولد:</Text>
          </View>
          <View style={stylePdf.tableRow}>
            <Text style={stylePdf.w50}>کدملی:</Text>
            <Text style={stylePdf.w50}> تحصیلات:</Text>
          </View>
          <View style={stylePdf.tableRow}>
            <Text style={stylePdf.w50}>پست الکترونیکی:</Text>
            <Text style={stylePdf.w50}>کد بورسی:</Text>
          </View>
          <View style={stylePdf.tableRow}>
            <Text style={stylePdf.w50}>آدرس:</Text>
          </View>
          <View style={stylePdf.tableRow}>
            <Text style={stylePdf.w30}>کد پستی:</Text>
            <Text style={stylePdf.w70}>شهر محل سکونت:</Text>
          </View>
          <View style={stylePdf.tableRowLast}>
            <Text style={stylePdf.w30}>تلفن همراه:</Text>
            <Text style={stylePdf.w70}>شماره تماس:</Text>
          </View>
        </View>
      </View>
      <View style={stylePdf.main2}>
        <View style={stylePdf.table}>
          <View style={stylePdf.tableTitle}>
            <Text>حساب های بانکی</Text>
          </View>
          <View style={stylePdf.tableRow2}>
            <Text style={stylePdf.w50}>شماره حساب )۱(:</Text>
            <Text style={stylePdf.w50}>شهر:</Text>
          </View>
          <View style={stylePdf.tableRow2}>
            <Text style={stylePdf.w50}>نوع حساب:</Text>
            <Text style={stylePdf.w50}>شماره شبا:</Text>
          </View>
          <View style={stylePdf.tableRow2}>
            <Text style={stylePdf.w50}>نام بانک:</Text>
            <Text style={stylePdf.w20}>کد و نام شعبه:</Text>
            <Text style={stylePdf.w30}>کد شعبه:</Text>
          </View>
          <View style={stylePdf.tableRow2}>
            <Text style={stylePdf.w50}>شماره حساب )۲(:</Text>
            <Text style={stylePdf.w50}>شهر:</Text>
          </View>
          <View style={stylePdf.tableRow2}>
            <Text style={stylePdf.w50}>نوع حساب:</Text>
            <Text style={stylePdf.w50}>شماره شبا:</Text>
          </View>
          <View style={stylePdf.tableRow2Last}>
            <Text style={stylePdf.w50}>نام بانک:</Text>
            <Text style={stylePdf.w20}>کد و نام شعبه:</Text>
            <Text style={stylePdf.w30}>کد شعبه:</Text>
          </View>
        </View>
      </View>
      <View style={stylePdf.main3}>
        <View style={stylePdf.table}>
          <View style={stylePdf.tableTitle}>
            <Text>اطلاعات شغل مشتری</Text>
          </View>
          <View style={stylePdf.tableRow3}>
            <Text style={stylePdf.w50}>شغل:</Text>
            <Text style={stylePdf.w50}> نام سازمان یا شرکت: </Text>
          </View>
          <View style={stylePdf.tableRow3}>
            <Text style={stylePdf.w50}>آدرس: </Text>
          </View>
          <View style={stylePdf.tableRow3}>
            <Text style={stylePdf.w50}>کدپستی:</Text>
            <Text style={stylePdf.w50}> سمت:</Text>
          </View>
          <View style={stylePdf.tableRow3last}>
            <Text style={stylePdf.w50}>تلفن محل کار:</Text>
            <Text style={stylePdf.w50}>نمابر:</Text>
          </View>
        </View>
      </View>
      <View style={stylePdf.main4}>
        <View style={stylePdf.table}>
          <View style={stylePdf.tableTitle}>
            <Text>اطلاعات شغل مشتری</Text>
          </View>
          <View style={stylePdf.table4Text}>
            <Text>*میزان آشنایی با بورس و مفاهیم مالی:</Text>
            <Text>ارزش روز دارایی های تحت مالکیت شما تقریبا چقدر است؟</Text>
            <Text>
              متوسط درآمد ماهیانه شما از مشاغل و منابع مختلف در حال حاضر چقدر
              است؟
            </Text>
            <Text>
              حدود ارزش معاملات شما طی یک سال اخیر در جدول زیر درج شود:
            </Text>
          </View>
          <View style={stylePdf.main4Table4Parent}>
            <View style={stylePdf.main4Table4}>
              <View style={stylePdf.main4Table4ChilLast}>
                <View style={stylePdf.titleTable}>
                  <Text> بورس اوراق بهادار و فرابورس </Text>
                  <Text>دلار آمریکا</Text>
                </View>
                <View></View>
              </View>
              <View style={stylePdf.main4Table4Child}>
                <View style={stylePdf.titleTable}>
                  <Text>بورس های کالایی )میلیون ریال(</Text>
                </View>
                <View></View>
              </View>
              <View style={stylePdf.main4Table4Child}>
                <View style={stylePdf.titleTable}>
                  <Text>بورس های خارج از کشور</Text>
                  <Text>میلیون ریال</Text>
                </View>
                <View></View>
              </View>
            </View>
          </View>
          <View style={stylePdf.table4Text}>
            <Text>
              نام شرکت / شرکت های کارگزاری در ایران که شما از طریق آن مبادرت به
              معامله نموده اید، ذکر نمایید؟
            </Text>
            <Text>
              *پیش بینی می کنید سطح معاملات شما در بازار سرمایه طی یک سال چه
              مبلغی باشد؟
            </Text>
            <Text>نام کاربری باشگاه مشتریان:</Text>
            <Text>
              تاریخ عضویت در باشگاه: ......./......../......۴۱ شناسه عضویت:
            </Text>
            <Text>کدهای معاملاتی مشتری )در صورتی که قبلا کد اخذ شده باشد(</Text>
          </View>
          <View style={stylePdf.main5Table5Parent}>
            <View style={stylePdf.main5Table5}>
              <View style={stylePdf.main5Table5ChilLast}>
                <View style={stylePdf.titleTable}></View>
                <View></View>
              </View>
              <View style={stylePdf.main4Table4Child}>
                <View style={stylePdf.titleTable}></View>
                <View></View>
              </View>
              <View style={stylePdf.main4Table4Child}>
                <View style={stylePdf.titleTable}></View>
                <View></View>
              </View>
              <View style={stylePdf.main4Table4Child}>
                <View style={stylePdf.titleTable}></View>
                <View></View>
              </View>
              <View style={stylePdf.main4Table4Child}>
                <View style={stylePdf.titleTable}>
                  <Text>نام بورس/ بازار خارج از بورس</Text>
                </View>
                <View style={stylePdf.textTable}>
                  <Text>کد معاملاتی</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={stylePdf.footerText}>
          <Text>امضا مشتری:</Text>
        </View>
      </View>
    </>
  );
};
export default TablePdf4;
