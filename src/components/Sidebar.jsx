import React, { useState } from 'react';
import marketme from '../img/marketme.svg'
import rocket from '../img/rocket.svg'
import strategy from '../img/Strategy.svg'

const Sidebar = () => {
    const [active, setActive] = useState(false)
    const data = [{
        icon: "ri-clipboard-line",
        name: "Content Creation"
    },
    {
        icon: "ri-line-chart-line",
        name: "SEO"
    },
    {
        icon: "ri-advertisement-line",
        name: "Google Ads"
    },
    {
        icon: "ri-advertisement-line",
        name: "Social Media Ads"
    },
    {
        icon: "ri-clipboard-line",
        name: "Social Media Posting"
    },];

    const data1 = [{
        icon: "ri-settings-2-line",
        name: "Setting"
    },
    {
        icon: "ri-group-line",
        name: "Support"
    }];

    return (
        <div className={`${active ? "active" : ""} sidebar position-relative text-white py-4  `}>
            <div className="position-absolute menubar_parent px-3">
                <i className="menubar ri-menu-line ri-lg text-dark" onClick={() => setActive(!active)}></i>
            </div>
            <div className={`${active?' d-flex justify-content-center':'px-4'}`}>
                <img src={!active ? marketme : rocket} alt="" width={active ? 35 : 190} height={40} class="px-1"/>
            </div>
            <div className="mt-4 p-0">
                <ul type="none" className="list-group gap-1">
                    <li className={`d-flex gap-3 align-items-center py-2 ${active?'justify-content-center':'px-4'} rounded-2`}>
                        <i className="ri-dashboard-line ri-lg py-1"></i>
                        <span className={`${active ? "d-none" : ""} flex-shrink-0`}>Dashboard</span>
                    </li>
                    <li className={`d-flex gap-3 py-2 ${active?'justify-content-center':'px-4'} rounded-2 align-items-center`}>
                        <div>
                            <img src={strategy} alt="" />
                        </div>
                        <span className={`${active ? "d-none" : ""} flex-shrink-0`}>Strategy</span>
                    </li>
                    {data.map((item, index) => {
                        return <li className={`d-flex gap-3 py-2 ${active?'justify-content-center':'px-4'} rounded-2 align-items-center ${item.name==="Content Creation"? 'selected':null}`}>
                            <i className={`${item.icon} ri-lg py-1`}></i>
                            <span className={`${active ? "d-none" : ""} flex-shrink-0`}>{item.name}</span>
                        </li>
                    })}
                </ul>
                <h6 className={`my-3 help ${active?'px-3':'px-4'}`}>Help</h6>
                <ul type="none" className=" list-group">
                    {data1.map((item, index) => {
                        return <li className={`d-flex gap-3 py-2 ${active?'justify-content-center':'px-4'} rounded-2 align-items-center`}>
                            <i className={`${item.icon} ri-lg py-1`}></i>
                            <span className={`${active ? "d-none" : ""} flex-shrink-0`}>{item.name}</span>
                        </li>
                    })}
                </ul>
                <div className={`${active ? "d-none" : ""} credits d-flex flex-shrink-0 gap-4 mt-4 px-4`}>
                    <p>Credits : 300</p>
                    <p><span className="top_up text-white rounded-1 px-2 fs-6 ">Top up</span></p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar