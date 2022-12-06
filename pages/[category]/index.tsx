import { useRouter } from 'next/router';
import React from 'react'

type Props = {}

const index = (props: Props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { query } = useRouter();
    const category = query.category;
  return (
    <div>index</div>
  )
}

export default index