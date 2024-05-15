import React from 'react'

export default function Reports({ data }) {
  return (
    <div>
      <h3>Reports and Analytics</h3>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map(report => (
            <tr key={report.id}>
              <td>{report.type}</td>
              <td>{report.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
