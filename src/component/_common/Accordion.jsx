import React from 'react'
import UpIcon from '../icons/UpIcon';
import DownIcon from '../icons/DownIcon';

function Accordion({ index, data, list = null, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  
  const handleAccordion = () => {
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div
      className={`accordion-item ${isOpen ? 'open' : ''}`}
    >
      <div className="accordion-item-info" onClick={handleAccordion}>
        <div>
          <p className='accordion-item-title-inmy'>
            {data.noticeType && (<span>{data.noticeType}</span>)}{data.title}
          </p>
          {data.date && (<span>{data.date}</span>)}
        </div>
        <div className={`updown-icon ${isOpen ? 'active' : ''}`}>
          {isOpen ? <UpIcon className="accordionicon" /> : <DownIcon className="accordionicon" />}
        </div>
      </div>

      {isOpen && (
        <div className="accordion-item-content">
          <p>{data.content}</p>
        </div>
      )}
      {list && index < list.length - 1 && <hr />}
      
    </div>
  )
}

export default Accordion