import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import {
  shortAddress,
  shortAddressMaxLength,
  showIconChain
} from '../../../../_metronic/helpers/format'
import { useAuth } from '../../../modules/auth'

export interface VisitsAssetProps {
  listAssets: any[]
}

export function VisitsAsset(props: VisitsAssetProps) {
  const {currentUser} = useAuth()
  const listAssets = [...props.listAssets]?.splice(0, 6)

  const showBadgeOwnerName = (name) => {
    if (currentUser?.name === name) {
      return 'badge-light-success'
    } else return 'text-gray-800 fw-bold d-block'
  }

  return (
    <div className='card card-flush h-lg-100'>
      <div className='card-header pt-7 mb-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-gray-800'>Newest Assets</span>
          <span className='text-gray-400 mt-1 fw-semibold fs-6'>Most recently minted assets</span>
        </h3>

        <div className='card-toolbar'>
          <Link to={'/assets'} className='btn btn-sm btn-light'>View All</Link>
        </div>
      </div>

      <div className='card-body pt-0'>
        {listAssets &&
          listAssets?.length > 0 &&
          listAssets?.map((asset, index) => {
            return (
              <>
                <div key={index} className='d-flex flex-stack'>
                  {showIconChain({
                    chain: asset.chainName,
                    styled: {
                      width: 25,
                      borderRadius: '0.425rem',
                      marginRight: '1rem',
                    },
                  })}

                  <div className='d-flex flex-stack flex-row-fluid d-grid gap-2'>
                    <div className='me-5'>
                      <a
                        data-tip={asset?.xref?.length > 10 ? asset?.xref : ''}
                        data-for='xref'
                        className='text-gray-800 fw-bold text-hover-primary fs-6'
                      >
                        {shortAddressMaxLength(asset?.xref, 10)}
                      </a>

                      <ReactTooltip id='xref' place='top' effect='solid' />

                      <Link
                        to={`/assets/detail/overview/${asset?.id}`}
                        data-tip={
                          asset?.instamintAssetHashid?.length > 15
                            ? asset?.instamintAssetHashid
                            : ''
                        }
                        data-for='instamintAssetHashid'
                        className='text-gray-400 fw-semibold fs-7 d-block text-start ps-0 cursor-pointer'
                      >
                        {shortAddress(asset?.instamintAssetHashid, 4, 4, 15)}
                      </Link>
                      <ReactTooltip id='instamintAssetHashid' place='right' effect='solid' />
                    </div>

                    <div className='d-flex align-items-center'>
                      <span className={`badge ${showBadgeOwnerName(asset?.issuerName)} fs-7`}>
                        {asset?.issuerName}
                      </span>

                      <DivOwnerName className='m-0'>
                        <span className={`badge ${showBadgeOwnerName(asset?.ownerName)} fs-7`}>
                          {asset?.ownerName}
                        </span>
                      </DivOwnerName>
                    </div>
                  </div>
                </div>
                <div className='separator separator-dashed my-3'></div>
              </>
            )
          })}
      </div>
    </div>
  )
}

const DivOwnerName = styled.div`
  display: flex;
  justify-content: end;
  min-width: 95px;
`
