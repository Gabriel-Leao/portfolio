import { ResumeItemProps } from '../../@types'


const ResumeItem = ({ type, degree, institution, startDate, endDate, company, position, description, location }: ResumeItemProps) => {
  return (
    <div className='py-6'>
      {type === 'experience' ? (
        <>
          <p className='italic'>
            <span className='font-bold'>{company}</span>
            <span className='px-2'>|</span>
            {location}
          </p>
          <p className='py-1 italic font-bold'>{position} ({startDate} — {endDate})</p>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </>
      ) : (
        <>
          <p className='italic'>
            <span className='font-bold'>{institution}</span>
            <span className='px-2'>|</span>
            {location}
          </p>
          <p className='py-1 italic font-bold'>{degree} ({startDate} — {endDate})</p>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </>
      )}
    </div>
  )
}

export default ResumeItem
