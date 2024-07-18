/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import styles from './index.module.less';

export const Topbar: React.FC = () => {
    return (
        <div className={styles.topbar}>
            <input
                type="text"
                placeholder="Search For File Name, Creation Time, Creator"
                className={styles.searchBar}
            />
            <div className={styles.topbarActions}>
                <button>+ New</button>
                <button>Upload</button>
                <button>🌐</button>
                <button>🔔</button>
                <img src="/uni-home/assets/images/avatar.png" alt="User Avatar" className={styles.avatar} />
            </div>
        </div>
    );
};
