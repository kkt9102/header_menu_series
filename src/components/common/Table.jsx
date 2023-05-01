const Table = ({TypeInfo}) => {
  return (
    <>
      <table>
        <colgroup>
        
        </colgroup>
        <thead>
          <tr>
            <th>fiexd</th>
            <th>Drop</th>
            <th>Depth</th>
            <th>Link Page</th>
            <th>Scroll Page</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {TypeInfo.map((item, index) =>
              <td key={index} align="center">{item.td}</td>
            )}
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Table;