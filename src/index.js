import "./styles.css";


"use strict";
          
        	Vue.directive("auto-focus", {
        		bind: function () {
        			Vue.nextTick(function () {
        				this.el.focus();
        			}.bind(this));
        		}
        	});
          
        	new Vue({
        		
        		el: "#todo",
        		
        		data: {
        			newTask: "",
        			tasks: [
        				{
        					text: "This is an example task. Delete or add your own",
        					checked: false
        				}
        			],
        
        			editingTask: {
        
        			}
        		},
        		
        		computed: {
        			areAllSelected: function () {
        				return this.tasks.every(function(task) {
        					return task.checked;
        				}) &&  this.tasks.length > 0;
        			},
        		},
        
        		methods: {
        
        			addTask: function () {
        				var task = this.newTask.trim();
        				if (task) {
        					this.tasks.push({text: task, checked: false});
        					this.newTask = "";
        				}
        			},
        
        			removeTask: function (task) {
                var index = this.tasks.indexOf(task);
        				this.tasks.splice(index, 1);
        			},
        
        			editTask: function (task) {
        				this.editingTask = task;
        			},
        
        			endEditing: function (task) {
        				this.editingTask = {};
        				if (task.text.trim() === ""){
        					this.removeTask(task);
        				}
        				
        			},
        
        			clearList: function () {
        				this.tasks = [
        
        				];
        			},
        
        			selectAll: function (task) {
        				var targetValue = this.areAllSelected ? false : true;
        				for (var i = 0; i < this.tasks.length; i++) {
        					this.tasks[i].checked = targetValue;
        				}
        			},
        
        			check: function (task) {
        				task.checked = true;
        			},
        
        			isChecked: function (task) {
					
        				return task.checked;
        			}
        
        		}
        	});
