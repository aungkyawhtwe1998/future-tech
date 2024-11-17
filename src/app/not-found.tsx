import React from 'react'
import Typography from './component/common/Typography'

export default function NotFound() {
    return (
      <div className="text-center py-40 mt-[var(--header-height)] bg-dark_15">
        <Typography variant="heading70">Sorry!</Typography>
        <Typography variant="h1">Page not found.</Typography>
      </div>
    );
}

