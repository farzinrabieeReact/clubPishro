import React, { Fragment, useState } from 'react';
import { Backdrop, Fade, makeStyles, Modal } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        borderCollapse: 'collapse',
        display: 'table',
        textAlign: 'left'
    },
    ProvinceName: {
        height: 60,
        backgroundColor: '#E8EBEE',
        borderRadius: '8px !important'
    },
    tr: {
        height: 60,
    },
    address: {
        maxWidth: 500,
        minWidth: 350,
    },
    minWidth: {
        minWidth: 120,
        padding: 2
    },
    tableParent: {
        width: "100%",
        paddingBottom: 15,
    },
    table: {
        backgroundColor: "#f2f2f2",
        width: "100%",
        "& tr": {
            "& :nth-child(odd)": {
                backgroundColor: "red",
            },
        },
    },
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        width: "60%",
        backgroundColor: theme.palette.background.paper,
        // border: "2px solid #000",
        // boxShadow: theme.shadows[5],
        borderRadius: 8,
        border: 0,
        outline: 0,
        padding: theme.spacing(2, 4, 3),
        position: "relative",
        paddingTop: 40,
        [theme.breakpoints.down("1000")]: {
            width: "80%",
        },
    }
}));


export default function Index({ data, ProvinceName }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);



    return (
        <div className={'table-responsive'}>
            <table className={`${classes['root']} mt-5 `}>
                <thead>
                    <tr>
                        {
                            th.map((value, index) => {
                                return <th key={index}>
                                    {value}
                                </th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        ProvinceName.map((city, index) => {
                            return (
                                <Fragment key={index}>
                                    <tr className={`${classes['ProvinceName']}`}>
                                        <td className={'pl-3'} colSpan={+th.length}> {city}</td>
                                    </tr>
                                    {
                                        data
                                            .filter(itme => city === itme.body.ProvinceName)
                                            .map((item, ind) =>
                                                <tr className={`${classes['tr']}`} key={ind} >
                                                    <td className={classes.minWidth}>{item.body.Name}</td>
                                                    <td className={classes.minWidth}>{item.body.DirectorName}</td>
                                                    <td className={classes['address']}>{item.body.Address}</td>
                                                    <td>{item.body.PhoneNumber}</td>
                                                    <td>{item.body.CityCodePhoneNumber}</td>
                                                    <td>{item.body.PostalCode}</td>
                                                    <td>
                                                        {console.log(item.body.Name, item.body.GoogleMapUrl)}
                                                        {
                                                            item.body.GoogleMapUrl ? (
                                                                <>
                                                                    <img
                                                                        src={"/media/common/Path 2687.png"}
                                                                        alt=""
                                                                        onClick={() => setOpen(true)}
                                                                        style={{ cursor: 'pointer' }}
                                                                    />

                                                                    <Modal
                                                                        aria-labelledby="transition-modal-title"
                                                                        aria-describedby="transition-modal-description"
                                                                        className={classes.modal}
                                                                        open={open}
                                                                        onClose={() => setOpen(false)}
                                                                        closeAfterTransition
                                                                        BackdropComponent={Backdrop}
                                                                        BackdropProps={{
                                                                            timeout: 500,
                                                                        }}
                                                                    >
                                                                        <Fade in={open}>
                                                                            <div className={classes.paper}>
                                                                                <iframe
                                                                                    src={item.body.GoogleMapUrl}
                                                                                    width="100%"
                                                                                    height="450"
                                                                                    allowFullScreen=""
                                                                                    loading="lazy"
                                                                                ></iframe>
                                                                                {/* <span
                                                                                    style={{ position: "absolute", top: 10, left: 10, color: "red" }}
                                                                                    onClick={() => setOpen(false)}
                                                                                >
                                                                                    <svg
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        width="25"
                                                                                        height="25"
                                                                                        fill="currentColor"
                                                                                        class="bi bi-x-circle"
                                                                                        viewBox="0 0 16 16"
                                                                                    >
                                                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                                                    </svg>
                                                                                </span> */}
                                                                            </div>
                                                                        </Fade>
                                                                    </Modal>
                                                                </>
                                                            ) : "-"
                                                        }

                                                    </td>
                                                </tr>
                                            )
                                    }
                                </Fragment>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}



const th = [
    'شعبه',
    'مسئول',
    'آدرس',
    'تلفن',
    'پیش شماره',
    'کد پستی',
    'نقشه',
]
