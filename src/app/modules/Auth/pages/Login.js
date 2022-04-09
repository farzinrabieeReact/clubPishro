import React, { useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";
// import { checkNationalCode, checkNationalCodeLegal } from "../../../common/method/NationalCode";


/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

function Login(props) {

  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const history = useHistory()
  const location = useLocation()


  const LoginSchema = Yup.object().shape({
    national_id: Yup.string()
      .min(10, 'کدملی را به درستی وارد نمایید')
      .max(11, 'کدملی را به درستی وارد نمایید')
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      )
    ,
    password: Yup.string()
      // .min(6, "حداقل 6 کاراکتر")
      // .max(25, "حداکثر 25 کاراکتر")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),
  });

  const initialValues = {
    national_id: location.state?.national_id ? location.state.national_id : "",
    password: location.state?.password ? location.state.password : "",
    // national_id: "0015846237",
    // password: "Erfan123456789",
  };

  // useEffect(() => {
  //   console.log(`location`, location.state);
  // }, [location])


  const handleRoute = () => {
    setTimeout(() => {
      if (location?.state?.from) {
        history.push(location?.state?.from)
        return
      }

      history.push("/home")
    }, 1000);
  }

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };


  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {

      // let isOkCode = checkNationalCode(values.national_id)
      // let isOkLegal = checkNationalCodeLegal(values.national_id)
      let isOkCode = true;
      let isOkLegal = true;
      
      enableLoading();

      if (isOkCode || isOkLegal) {

        login(values.national_id, values.password)
          .then((res) => {
            if (!Object.keys(res.data.response.data).length) {
              setStatus(
                intl.formatMessage({
                  id: "AUTH.VALIDATION.INVALID_LOGIN",
                })
              );
              return
            }
            disableLoading();
            props.login(res.data.response.data);
            handleRoute()
          })
          .catch(() => {
            setStatus(
              intl.formatMessage({
                id: "ERROR.SERVER",
              })
            );
          })
          .finally(() => {
            disableLoading();
            setSubmitting(false);
          });

        return
      } else {

        setStatus(
          intl.formatMessage({
            id: "AUTH.VALIDATION.ERROR",
          })
        );

        disableLoading();
        setSubmitting(false);
        return
      }
    },
  });


  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* begin::Head */}
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          <FormattedMessage id="AUTH.LOGIN.TITLE" />
        </h3>
        {/* <p className="text-muted font-weight-bold">
        نام کاربری و رمز عبور خود را وارد کنید   
         </p> */}
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : (
            <div className="mb-10 alert alert-custom alert-light-info alert-dismissible">
              <div className="alert-text ">
                کد ملی و رمز عبور خود را وارد کنید
            </div>
            </div>
          )}

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="کد ملی"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "national_id"
            )}`}
            name="national_id"
            {...formik.getFieldProps("national_id")}
          />
          {formik.touched.national_id && formik.errors.national_id ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.national_id}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="رمز عبور"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
          </Link>
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span><FormattedMessage id="AUTH.LOGIN.BUTTON" /></span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Login));
