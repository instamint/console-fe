import { useNavigate } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import styled from 'styled-components'
import {
    shortAddressMaxLength,
    showIconChain
} from '../../../../_metronic/helpers/format'
import { useAuth } from '../../../modules/auth'

export interface VisitsAssetProps {
  listAssets: any[]
}

export function VisitsAsset(props: VisitsAssetProps) {
  const navigate = useNavigate()
  const {currentUser} = useAuth()
  const listAssets = [...props.listAssets]?.splice(0, 6)

  const navigateDetailAsset = (id) => {
    if (id) {
      navigate(`/assets/detail/overview/${id}`)
    }
  }

  const showBadgeOwnerName = (asset) => {
    if (currentUser?.name === asset?.issuerName || currentUser?.name === asset?.ownerName) {
      return 'badge-light-success'
    } else return 'badge-light-danger'
  }

  return (
    <div className='card card-flush h-lg-100'>
      <div className='card-header pt-7 mb-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold text-gray-800'>Newest Assets</span>
          <span className='text-gray-400 mt-1 fw-semibold fs-6'>Most recently minted assets</span>
        </h3>

        <div className='card-toolbar'>
          <a className='btn btn-sm btn-light'>Assets</a>
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
                        data-tip={asset?.xref?.length > 15 ? asset?.xref : ''}
                        data-for='xref'
                        className='text-gray-800 fw-bold text-hover-primary fs-6'
                      >
                        {shortAddressMaxLength(asset?.xref, 15)}
                      </a>

                      <ReactTooltip id='xref' place='top' effect='solid' />

                      <span
                        data-tip={
                          asset?.instamintAssetHashid?.length > 15
                            ? asset?.instamintAssetHashid
                            : ''
                        }
                        data-for='instamintAssetHashid'
                        className='text-gray-400 fw-semibold fs-7 d-block text-start ps-0 cursor-pointer'
                        onClick={() => navigateDetailAsset(asset?.id)}
                      >
                        {shortAddressMaxLength(asset?.instamintAssetHashid, 15)}
                      </span>
                      <ReactTooltip id='instamintAssetHashid' place='right' effect='solid' />
                    </div>

                    <div className='d-flex align-items-center'>
                      <span className='text-gray-800 fw-bold fs-6 me-3 d-block'>
                        {asset?.issuerName}
                      </span>

                      <DivOwnerName className='m-0'>
                        <span className={`badge ${showBadgeOwnerName(asset)} fs-base`}>
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
`
