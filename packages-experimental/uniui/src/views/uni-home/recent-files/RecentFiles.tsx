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
import { MoreHorizontalSingle, UnorderSingle } from '@univerjs/icons';
import styles from './index.module.less';

export const mockData = [
    {
        icon: '🎉',
        title: 'Sales performance',
        description: 'Key metrics monitoring and updates for sales team.',
        collaborators: ['./assets/images/avatar1.png'],
        link: 'https://univer.ai',
        pages: 0,
        lastModified: '2024/01/23',
        owner: 'Elson',
    },
    {
        icon: '📅',
        title: 'Roadmap',
        description: 'Product development timeline and priorities.',
        collaborators: ['./assets/images/avatar2.png'],
        pages: 3,
        lastModified: '2024/01/23',
        owner: 'Elson',
    },
    {
        icon: '📞',
        title: 'Customer outreach',
        description: 'Manage potential customers and sales training materials.',
        collaborators: ['./assets/images/avatar1.png', './assets/images/avatar3.png', './assets/images/avatar4.png', './assets/images/avatar5.png'],
        pages: 8,
        lastModified: '2024/01/23',
        owner: 'Elson',
    },
    {
        icon: '📝',
        title: 'User feedback',
        description: 'Interview records & customized solutions for customer success.',
        collaborators: ['./assets/images/avatar1.png', './assets/images/avatar3.png', './assets/images/avatar4.png', './assets/images/avatar5.png'],
        pages: 5,
        lastModified: '2024/01/23',
        owner: 'Elson',
    },
    {
        icon: '🎉',
        title: 'Sales Performance 2',
        description: 'Key metrics monitoring and updates for sales team.',
        collaborators: ['./assets/images/avatar2.png'],
        pages: 0,
        lastModified: '2024/01/24',
        owner: 'Elson',
    },
    {
        icon: '📅',
        title: 'Roadmap 2',
        description: 'Product development timeline and priorities.',
        collaborators: ['./assets/images/avatar2.png'],
        pages: 3,
        lastModified: '2024/01/25',
        owner: 'Elson',
    },
];

export const RecentFiles: React.FC = () => {
    return (
        <div className={styles.recentFiles}>
            <h2>Recent Files</h2>
            <div className={styles.fileListTitle}>
                <span className={styles.fileName}>
                    <input className={styles.fileCheck} type="checkbox" />
                    Name
                </span>
                <span className={styles.fileOwner}>Owner</span>
                <span className={styles.fileLastModified}>Last Modified</span>
                <UnorderSingle className={styles.fileOperation} />
            </div>
            <div className={styles.fileList}>
                {mockData.map((file, index) => (
                    <div key={index} className={styles.fileRow}>
                        <div className={styles.fileName}>
                            <input className={styles.fileCheck} type="checkbox" />
                            <span className={styles.fileIcon}>{file.icon}</span>
                            <span className={styles.fileTitle}>{file.title}</span>
                        </div>
                        <div className={styles.fileOwner}>{file.owner}</div>
                        <div className={styles.fileLastModified}>{file.lastModified}</div>
                        <MoreHorizontalSingle className={styles.fileOperation} />
                    </div>
                ))}
            </div>
        </div>
    );
};
