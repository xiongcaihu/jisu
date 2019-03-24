import draggable from 'vuedraggable';
import MockJs from 'mockjs';

const treeData = [{
    title: 'parent 1',
    key: '0-0',
    children: [{
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [{
                title: 'leaf',
                key: '0-0-0-0',
                disableCheckbox: true
            },
            {
                title: 'leaf',
                key: '0-0-0-1'
            },
        ],
    }, {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{
            key: '0-0-1-0',
            slots: {
                title: 'title0010'
            }
        }, ],
    }],
}]

export default {
    data: () => {
        return {
            treeData,
            myArray: MockJs.mock({
                'list|4-100': [{
                    id: '@integer()',
                    'name|1': ['My-Line', 'bar', 'column']
                }]
            }).list,
            myArray2: []
        }
    },
    components: {
        draggable,
        'My-Line': () => import('../Line/Line.vue')
    },
    methods: {
        checkMove: function (evt) {
            return evt.from != evt.to;
        }
    }
}