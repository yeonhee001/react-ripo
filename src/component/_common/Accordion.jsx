import React from 'react'
import UpIcon from '../icons/UpIcon';
import DownIcon from '../icons/DownIcon';
import CircleWhite from '../icons/CircleWhite';
import CirclePurple from '../icons/CirclePurple';

function Accordion({ index, data, openIndex, setOpenIndex }) {
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
          {data.tag && (<span>{data.tag}</span>)}
          <p className={`accordion-item-title${data.tag ? '' : '-inmy'}`}>
            {data.noticeType && (<span>{data.noticeType}</span>)}{data.title ? data.title : data.content}
          </p>
          {data.date && (<span>{data.date}</span>)}
        </div>
        {
          data.tag ? (
            data.answer ? <CirclePurple className={'circleicon'}/> : <CircleWhite className={'circleicon'}/>
          ) : (
            <div className={`updown-icon ${isOpen ? 'active' : ''}`}>
              {isOpen ? <UpIcon className="accordionicon" /> : <DownIcon className="accordionicon" />}
            </div>
          )
        }
      </div>

      {isOpen && (
        <div className="accordion-item-content">
          { data.tag ? (
            <p>
              <span>Q.</span> <br /> {data.content} <br />
            </p>
          ) : (
            <p>{data.content}</p>
          )}
          { data.answer && (
            <p className='accordion-item-answer'>
              <span>A.</span> <br /> {data.answer} <br />
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default Accordion