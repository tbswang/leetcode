#include <iostream>
#include<vector>
using namespace std;

int main()
{
  // int base = 1;
  // if (base > 15 / 10 || (base == 15 / 10 && 1 - '0' > 7))
  // {
  //   cout << 'a';
  //   cout << base;
  // }
  // cout << "finished";
  // cout << 'a' - '0';
  vector<int> v = { 1,2 };
  vector<int> v2 = { 3,4 };
  v.insert(v.begin(), v2.begin(), v2.end());
  for (auto i : v) {
    cout << i << ' ';
  }
  cout << v.back();
  cout << endl;
}