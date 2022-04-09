import React from 'react'

export default function Index({ setflagSwich, flagSwich, generalInformation, PersonalInformation }) {
    return (
        <div className={'d-flex flex-md-row flex-column justify-content-between align-items-center border-bottom pb-5'}>
            <div>
                <h3 className={'font-weight-bold'}>تابلوی اعلانات</h3>
            </div>
            <div>
                <button
                    onClick={() => setflagSwich(generalInformation)}
                    className={
                        `btn 
                     ${flagSwich === generalInformation ? 'btn-success' : 'btn-light'}
                     m-3`
                    }>
                    {generalInformation}
                </button>
                <button
                    onClick={() => setflagSwich(PersonalInformation)}
                    className={
                        `btn 
                     ${flagSwich === PersonalInformation ? 'btn-success' : 'btn-light'}
                     m-3`
                    }>
                    {PersonalInformation}
                </button>
            </div>
        </div>
    )
}
