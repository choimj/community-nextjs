import React from 'react';
import HelperText from '../HelperText';
import LocalButton from './LocalButton';
import StorageButton from './StorageButton';

const FileUploader = (): React.ReactElement => {
  return (
    <>
      <div className="LUX_filezone type2">
        <div className="file_bx">
          {/* [D] 기본 상태 */}
          <div className="default">
            <p>
              <span className="sp_lux" style={{ width: 41, height: 46, verticalAlign: 'middle', backgroundPosition: '-311px -663px' }} />
              <span className="txt">
                이미지 파일을 여기로 드래그 하거나,
                <br />
                파일찾기/스토리지에서 찾기를 눌러 첨부하세요.
              </span>
            </p>
          </div>
          {/* //[D] 기본 상태 */}
        </div>
        <div className="file_btnbx">
          <LocalButton />
          <StorageButton />
        </div>
      </div>
      <HelperText defaultText="커뮤니티 메인 상단 및 커뮤니티를 대표하여 사용될 이미지를 등록하세요." />
    </>
  );
};

export default FileUploader;
