import React, { useState } from 'react'
import './CompoCss/Tab.css'


const Tab = () => {
    const tabs = [
        { id: 'tab1', title: 'Description'},
        { id: 'tab2', title: 'Product Information'},
        { id: 'tab3', title: 'Reviews'},
    ];

    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    }

    return (
        <>
            <div className='tab-parent'>
                <div className="tabs">
                    {tabs.map((tab) => (
                        <div
                            key={tab.id}
                            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => handleTabClick(tab.id)}
                        >
                            {tab.title}
                        </div>
                    ))}
                </div>
                <div className="tab-content">
                    {tabs.map(
                        (tab) =>
                            activeTab === tab.id && (
                                <div key={tab.id} className="tab-pane">
                                   Dhoop incence cone made from natual hurbs and scented.Long lasting enthralling dhoop batti for regular use - encouraging and cheering dhoop incense cones. Use dhoop bati for offering your prayers or while meditating or relaxing. It will unquestionably boost up your confidence, create encouraging environment and purify the atmosphere while spreading the lingering aroma all around. Use it every morning while doing prayers, while meditating or exercising. It's one of the best incense cones that spread mesmerizing fragrance all around. Simply relax and have the time of your lives by getting these incense cones. can we use for spiritual and meditation purpose. Its great fragrance and long lasting effect. Its heavenly aroma encourages your soul and thoughts to be pure and beautiful. For uplifting and purifying the ambience.
                                </div>
                            )
                    )}
                </div>
            </div>
        </>
    )
}

export default Tab
